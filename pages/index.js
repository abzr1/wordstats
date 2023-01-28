import { useState, useEffect, useRef } from 'react'

export default function Home() {
    const [charCount, setCharCount] = useState(0)
    const [wordCount, setWordCount] = useState(0)
    const [sentenceCount, setSentenceCount] = useState(0)
    const [paragraphCount, setParagraphCount] = useState(0)

    const textarea = useRef(null)

    useEffect(() => {
        textarea.current.focus()
    }, [])

    function handleUserInput(evt) {
        setCharCount([...evt.target.value].length)

        setWordCount(
            evt.target.value.split(/[\s!?.]+/).filter((elt) => elt !== '')
                .length
        )

        setSentenceCount(
            evt.target.value.split(/[!?.\r\n]+/).filter((elt) => elt !== '')
                .length
        )

        setParagraphCount(
            evt.target.value.split(/[\r\n]{2,}/).filter((elt) => elt !== '')
                .length
        )
    }

    return (
        <div className="container mx-auto text-center">
            <header className="mt-16 mb-12">
                <h1 className="text-5xl font-medium border-b-2 border-cyan-400 inline">
                    wordstats
                </h1>
            </header>

            <aside>
                Built by{' '}
                <a
                    className="underline hover:opacity-70 transition text-cyan-400"
                    href="https://www.aryanbeezadhur.com"
                    target="_blank"
                    rel="noreferrer"
                >
                    Aryan Beezadhur
                </a>
            </aside>

            <div className="my-10 divide-x-2 divide-cyan-900">
                <span className="py-2 px-2">
                    <span className="font-medium text-cyan-400">
                        {charCount}
                    </span>{' '}
                    characters
                </span>

                <span className="py-2 px-2">
                    <span className="font-medium text-cyan-400">
                        {wordCount}
                    </span>{' '}
                    words
                </span>

                <span className="py-2 px-2">
                    <span className="font-medium text-cyan-400">
                        {sentenceCount}
                    </span>{' '}
                    sentences
                </span>

                <span className="py-2 px-2">
                    <span className="font-medium text-cyan-400">
                        {paragraphCount}
                    </span>{' '}
                    paragraphs
                </span>
            </div>

            <textarea
                ref={textarea}
                className="md:w-3/5 h-[28rem] p-4 transition bg-transparent border-2 border-gray-400 rounded-lg resize-none outline-0 focus:border-cyan-400"
                onChange={(evt) => handleUserInput(evt)}
            />
        </div>
    )
}
