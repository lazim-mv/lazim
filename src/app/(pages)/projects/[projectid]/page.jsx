import React from 'react'
import { projectData } from '@/app/components/Projects/data'
import ClientComponent from './ClientComponent'

const Page = async ({ params }) => {
    const { projectid } = await params
    const index = projectData.findIndex((item) => item.id === projectid)

    if (index === -1) {
        return (
            <div className="text-center mt-10 text-red-500">
                Project not found.
            </div>
        )
    }

    const project = projectData[index]
    const previous = index > 0 ? projectData[index - 1] : null
    const next = index < projectData.length - 1 ? projectData[index + 1] : null



    return (
        <article className="max-screen mt-10 max-w-(--breakpoint-lg)!">
            <ClientComponent
                project={project}
                previous={previous && { id: previous.id, name: previous.name }}
                next={next && { id: next.id, name: next.name }}
            />
        </article>
    )
}

export default Page
