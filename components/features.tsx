'use client'

import {
    CodeBracketIcon,
    ComputerDesktopIcon,
    BellAlertIcon,
    MusicalNoteIcon
} from '@heroicons/react/24/outline'

const features = [
    {
        name: 'Custom doorbell melody',
        description:
            'With Domophone, you can customize the melody of the doorbell with any MP3 file.',
        icon: MusicalNoteIcon,
    },
    {
        name: 'A modern interface',
        description:
            'We have worked a lot on the user experience and interface of Domophone applications.',
        icon: ComputerDesktopIcon,
    },
    {
        name: 'Fully open-source',
        description:
            'Domophone is fully open-source and all the softwares are free to use for any people.',
        icon: CodeBracketIcon,
    },
    {
        name: 'Program alarms',
        description:
            'With Domophone, you can program alarms like morning wake-up or other things.',
        icon: BellAlertIcon,
    },
]

export default function Features() {
    return (
        <div id="features" className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base font-semibold leading-7 text-yellow-600">Domophone</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Take a look of all uniques features of Domophone
                    </p>
                    <p className="mt-7 text-lg leading-8 text-gray-600">
                       Domophone has a lot of unique features !
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative pl-16">
                                <dt className="text-base font-semibold leading-7 text-gray-900">
                                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-600">
                                        <feature.icon aria-hidden="true" className="h-6 w-6 text-white" />
                                    </div>
                                    {feature.name}
                                </dt>
                                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}