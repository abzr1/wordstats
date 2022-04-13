document.addEventListener('alpine:init', () => {
    Alpine.data('wordstats', () => ({
        userInput: '',
        splitToWords: (str) => {
            return str
                .replace(/[,.!?:;#&"'`\\(){}<>\[\]]/g, '')
                .replaceAll('/', ' ')
                .split(' ')
                .filter((char) => char !== '')
        },
        get charCount() {
            return [...this.userInput].length // .split() is not unicode compliant
        },
        get wordCount() {
            const words = this.splitToWords(this.userInput)

            return words.length
        },
        get sentenceCount() {
            let sentences = this.userInput
                .replaceAll(' ', '')
                .replace(/[.!?\r\n]/g, ' ')
                .split(' ')
                .filter((char) => char !== '')

            return sentences.length
        },
        get paragraphCount() {
            let paragraphs = this.userInput
                .split(/[\r\n]/g)
                .filter((str) => str !== '')

            return paragraphs.length
        },
        get wordStats() {
            const words = this.splitToWords(this.userInput)

            wordStats = {}

            words.map((str) => {
                const currentStr = str.toLowerCase()

                if (!wordStats[currentStr]) {
                    wordStats[currentStr] = 1
                } else {
                    wordStats[currentStr]++
                }
            })

            // Sort by number of word occurrences, not occurrence of word in text
            wordStats = Object.entries(wordStats).sort((a, b) => b[1] - a[1])

            return wordStats
        }
    }))
})
