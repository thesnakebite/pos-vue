import { generateClasses } from '@formkit/themes'

const config = {
    config: {
        classes: generateClasses({
            global: {
                label: 'block mb-1 font-bold text-lg',
                message: 'inline-flex bg-red-400 text-white text-sm px-4 py-2 rounded-lg my-2 block mb-5',
                wrapper: 'space-y-1 mb-3',
                input: 'w-full p-3 border border-gray-300 rounded text-gray-700 placeholder-gray-400'

            },
            text: {
            },
            file: {
                noFiles: 'block my-2',
                fileItem: 'hidden'
            },
            select: {
            },
            number: {
            },
            submit: {
                input: '$reset bg-green-500 hover:bg-green-600 w-full font-bold rounded py-2 disabled:opacity-50',
            }
        })

    }
}

export default config;