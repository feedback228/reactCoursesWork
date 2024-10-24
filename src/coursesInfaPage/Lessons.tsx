import { LessonBlock } from "./LessonBlock"

export const Lessons = () => {
    return (
        <div className="flex flex-col mt-10 gap-10 px-8">
            <div className="flex items-center justify-between w-full">
                <h2 className="font-bold text-3xl">Lessons</h2>
                <div className="hidden 1000:flex items-center gap-[4.5rem]">
                    <p className="font-bold text-2xl">Tutorial</p>
                    <p className="font-bold text-2xl">Exercise</p>
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <LessonBlock num='2' title="Functions and Getting Help"  description="Calling functions and defining our own, and using Python's builtin documentation" />
                <LessonBlock num='3' title="Booleans and Conditionals"  description="Using booleans for branching logic" />
                <LessonBlock num='4' title="Lists"  description="Lists and the things you can do with them. Includes indexing, slicing and mutating" />
            </div>
        </div>
    )
}