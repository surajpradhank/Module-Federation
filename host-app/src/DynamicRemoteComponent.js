import React, { useEffect, useState, Suspense } from "react";

function loadRemoteComponent(remoteUrl, scope, module) {
    console.log(`Loading remote component from ${remoteUrl} with scope ${scope} and module ${module}`);
    return async () => {
        // Load remoteEntry.js script
        await new Promise((resolve, reject) => {
            if (window[scope]) return resolve();
            const script = document.createElement("script");
            script.src = remoteUrl;
            script.type = "text/javascript";
            script.async = true;
            script.onload = resolve;
            script.onerror = reject;
            document.head.appendChild(script);
        });
        // Initialize sharing if needed
        await __webpack_init_sharing__("default");
        const container = window[scope];
        await container.init(__webpack_share_scopes__.default);
        const factory = await container.get(module);
        const Module = factory();
        return Module.default || Module;
    };
}

const DynamicRemoteComponent = ({ remoteUrl, scope, module, fallback }) => {
    const [Component, setComponent] = useState(null);
    useEffect(() => {
        let isMounted = true;
        loadRemoteComponent(remoteUrl, scope, module)().then((Comp) => {
            if (isMounted) setComponent(() => Comp);
        });
        return () => { isMounted = false; };
    }, [remoteUrl, scope, module]);

    if (!Component) return fallback || <div>Loading remote...</div>;
    return <Component />;
};

export default DynamicRemoteComponent;
