import React from 'react';

const Loading = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="border-t-4 border-blue-500 rounded-full animate-spin w-16 h-16"></div>
        </div>
    );
};

export default Loading;