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
        <div className="grid grid-cols-[1fr_3fr]">
            <div className="h-screen border-r-[3px] border-gray-800 flex justify-center items-center">
                <div className="h-4/5">
                    <header>
                        <h1 className="font-display text-5xl border-b-[3px] border-sky-500 select-none">
                            Wordstats
                        </h1>
                    </header>

                    <div className="mt-12 text-lg">
                        <span className="text-sky-500 font-display">
                            {charCount}
                        </span>{' '}
                        {charCount === 1 ? 'character' : 'characters'}
                    </div>

                    <div className="mt-12 text-lg">
                        <span className="text-sky-500 font-display">
                            {wordCount}
                        </span>{' '}
                        {wordCount === 1 ? 'word' : 'words'}
                    </div>

                    <div className="mt-12 text-lg">
                        <span className="text-sky-500 font-display">
                            {sentenceCount}
                        </span>{' '}
                        {sentenceCount === 1 ? 'sentence' : 'sentences'}
                    </div>

                    <div className="mt-12 text-lg">
                        <span className="text-sky-500 font-display">
                            {paragraphCount}
                        </span>{' '}
                        {paragraphCount === 1 ? 'paragraph' : 'paragraphs'}
                    </div>
                </div>
            </div>

            <div className="h-screen flex justify-center items-center">
                <textarea
                    ref={textarea}
                    placeholder="Type something..."
                    onChange={(evt) => handleUserInput(evt)}
                    className="w-4/5 h-4/5 p-6 bg-transparent resize-none outline-none rounded-lg border-[3px] border-gray-800 focus:border-sky-800 transition selection:bg-sky-500"
                ></textarea>
            </div>
        </div>
    )
}
