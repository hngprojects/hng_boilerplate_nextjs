"use client"
import { ArrowDown, ArrowUp } from 'lucide-react';
import { useState } from 'react';

interface Incident {
    date: string;
    report: string;
}

const incidents: Incident[] = [
    {
        date: 'Aug 22, 2024',
        report: 'No incidents reported today.',
    },
    {
        date: 'Aug 21, 2024',
        report: 'No incidents reported.',
    },
    {
        date: 'Aug 20, 2024',
        report: 'Minor server outage from 2 PM to 3 PM.',
    },
    {
        date: 'Aug 19, 2024',
        report: 'Scheduled maintenance completed successfully.',
    },
    {
        date: 'Aug 18, 2024',
        report: 'System update applied, no issues reported.',
    },
];

const PastIncidents: React.FC = () => {
    const [showAll, setShowAll] = useState(false);

    const toggleShowAll = () => setShowAll(!showAll);

    const initialCount = 2;
    const visibleIncidents = showAll ? incidents : incidents.slice(0, initialCount);

    return (
        <div className="flex justify-center items-center mt-20">
            <div className="w-full max-w-4xl">
                <div className="text-sm font-medium mb-4">
                    <div className="text-lg md:text-2xl">Past Incidents</div>
                </div>

                {visibleIncidents.map((incident, index) => (
                    <div key={index} className="pt-4 mb-8">
                        <div className="md:text-lg font-semibold border-b">{incident.date}</div>
                        <div className="mt-2 text-sm text-neutral-500">{incident.report}</div>
                    </div>
                ))}

                <button
                    onClick={toggleShowAll}
                    className="py-2 text-xs font-medium text-primary -mt-10"
                >
                    {showAll ? <span className='flex items-center'><ArrowUp width={12}/> Show Less</span> : <span className='flex items-center'><ArrowDown width={12}/> Show More</span>}
                </button> 
            </div>
        </div>
    );
};

export default PastIncidents;
