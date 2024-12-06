import { useState } from 'react';
import { ActiveCourses } from './ActiveCourses';
import { CompletedCourses } from './CompletedCourses';


export const YourCourses = () => {
    const [activeTab, setActiveTab] = useState<'active' | 'completed'>(
        'active'
    );

    return (
        <div className="flex items-start flex-col w-full px-8 gap-4 mt-4">
        <h2 className="text-3xl font-bold">Your courses</h2>
        <div className="flex items-center gap-3 bg-gray rounded-lg p-2">
            <button
                onClick={() => setActiveTab('active')}
                className={`p-2 ${
                    activeTab === 'active' ? 'bg-black rounded-lg' : ''
                }`}
            >
                Active
            </button>
            <button
                onClick={() => setActiveTab('completed')}
                className={`p-2 ${
                    activeTab === 'completed' ? 'bg-black rounded-lg' : ''
                }`}
            >
                Completed
            </button>
        </div>
        {activeTab === 'active' ? (
            <ActiveCourses />
        ) : (
            <CompletedCourses />
        )}
    </div>
    )
}