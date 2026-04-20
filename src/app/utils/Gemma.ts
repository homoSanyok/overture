import { Anchor, LLMConnector, Message } from "../../../../anchor-assistant/src";

export class Gemma extends LLMConnector {
    override async send(message: Message): Promise<Message> {
        const anchorText = this.getAnchors()
            .map((a: Anchor) => `${a.selector} - ${a.anchor} - ${a.parent_selector || "root"}`)
            .join("\n");

        const prompt = `ЗАПРОС:
${message.text}

ДОСТУПНЫЕ ЯКОРЯ:
${anchorText}

Верни только путь селекторов через запятую.
Используй только селекторы из списка.`;

        return fetch(`http://localhost:8000/v1/chat/completions`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: "gemma-3-1b",
                temperature: 0,
                max_tokens: 80,
                messages: [
                    {
                        role: "user",
                        content: prompt
                    }
                ]
            })
        })
            .then(async (r) => {
                if (!r.ok) {
                    throw new Error(`HTTP ${r.status}`);
                }
                return r.json();
            })
            .then((json) => {
                const raw: string = json?.choices?.[0]?.message?.content?.trim() || "";

                if (!raw || raw === "not_found" || raw.startsWith("not_found")) {
                    return {
                        from: "llm",
                        text: "Извините, раздел не найден."
                    } satisfies Message;
                }

                const selectors = raw
                    .split(",")
                    .map((s: string) => s.trim())
                    .filter((s: string) => s.startsWith("#"));

                if (selectors.length === 0) {
                    return {
                        from: "llm",
                        text: "Извините, раздел не найден."
                    } satisfies Message;
                }

                const anchorMap = new Map<string, Anchor>(
                    this.getAnchors().map((a: Anchor) => [a.selector, a])
                );

                for (const selector of selectors) {
                    if (!anchorMap.has(selector)) {
                        return {
                            from: "llm",
                            text: "Извините, раздел не найден."
                        } satisfies Message;
                    }
                }

                for (let i = 0; i < selectors.length; i++) {
                    const current = anchorMap.get(selectors[i])!;

                    if (i === 0) {
                        if (current.parent_selector !== "root") {
                            return {
                                from: "llm",
                                text: "Извините, раздел не найден."
                            } satisfies Message;
                        }
                    } else {
                        const prev = selectors[i - 1];
                        if (current.parent_selector !== prev) {
                            return {
                                from: "llm",
                                text: "Извините, раздел не найден."
                            } satisfies Message;
                        }
                    }
                }

                const text =
                    selectors
                        .map((selector: string) => {
                            const anchor = anchorMap.get(selector)!;
                            return anchor.anchor.split(",")[0].trim();
                        })
                        .join(" → ") + ".";

                return {
                    from: "llm",
                    text,
                    selectors
                } satisfies Message;
            })
            .catch(() => {
                return {
                    from: "llm",
                    text: "Извините, раздел не найден."
                } satisfies Message;
            });
    }

    constructor(anchords: Anchor[]) {
        super(anchords);
    }
}