import { contexts, setContext } from "@api/Contexts";
import { Dispatcher } from "..";

export function simpleContext<Key extends ContextKey>(context: Key, options: { save: boolean, listen: boolean; } = { save: true, listen: true }): [() => Context<Key>, (newVal: Context<Key>) => void, () => void, (context: ContextKey, callback: <Key extends ContextKey>(context: Key, value: Context<Key>) => void) => void] {
    let val: Context<Key> = contexts[context] as Context<Key>;
    Dispatcher.addListener("COLORWAYS_CONTEXT_UPDATED", ({ c, value }: { c: Key, value: Context<Key>; }) => {
        if (context === c) {
            val = value;
            if (events[c]) {
                events[c].forEach(callback => callback(c, value));
            }
        }
    });

    type Events = {
        [key in ContextKey]: (<Key extends ContextKey>(context: Key, value: Context<Key>) => void)[]
    };

    let events: Partial<Events> = {};

    const set = (value: Context<Key>) => {
        val = setContext(context, value, options.save) as Context<Key>;
    };

    return [
        () => val,
        set,
        () => {
            Dispatcher.removeListener("COLORWAYS_CONTEXT_UPDATED", ({ c, value }: { c: Key, value: Context<Key>; }) => {
                if (context === c) {
                    val = value;
                    if (events[c]) {
                        events[c].forEach(callback => callback(c, value));
                    }
                }
            });
            events = {};
        },
        (context: ContextKey, callback: <Key extends ContextKey>(context: Key, value: Context<Key>) => void) => {
            if (!events[context]) {
                events[context] = [];
            }
            events[context].push(callback);
        }
    ];
}

export function simpleContexts(): [() => { [key in ContextKey]: Context<key> }, () => void, (context: ContextKey, callback: <Key extends ContextKey>(context: Key, value: Context<Key>) => void) => void] {
    const val = contexts as { [key in ContextKey]: Context<key> };
    Dispatcher.addListener("COLORWAYS_CONTEXT_UPDATED", <Key extends ContextKey>({ c, value }: { c: Key, value: Context<Key>; }) => {
        val[c] = value;
        if (events[c]) {
            events[c].forEach(callback => callback(c, value));
        }
    });

    type Events = {
        [key in ContextKey]: (<Key extends ContextKey>(context: Key, value: Context<Key>) => void)[]
    };

    let events: Partial<Events> = {};

    return [
        () => val,
        () => {
            Dispatcher.removeListener("COLORWAYS_CONTEXT_UPDATED", <Key extends ContextKey>({ c, value }: { c: Key, value: Context<Key>; }) => {
                val[c] = value;
                if (events[c]) {
                    events[c].forEach(callback => callback(c, value));
                }
            });
            events = {};
        },
        (context: ContextKey, callback: <Key extends ContextKey>(context: Key, value: Context<Key>) => void) => {
            if (!events[context]) {
                events[context] = [];
            }
            events[context].push(callback);
        }
    ];
}

export function simpleContextsObject(): { contexts: () => { [key in ContextKey]: Context<key> }, destroyContexts: () => void, addContextListener: (context: ContextKey, callback: <Key extends ContextKey>(context: Key, value: Context<Key>) => void) => void; } {
    const val = contexts as { [key in ContextKey]: Context<key> };
    Dispatcher.addListener("COLORWAYS_CONTEXT_UPDATED", <Key extends ContextKey>({ c, value }: { c: Key, value: Context<Key>; }) => {
        val[c] = value;
        if (events[c]) {
            events[c].forEach(callback => callback(c, value));
        }
    });

    type Events = {
        [key in ContextKey]: (<Key extends ContextKey>(context: Key, value: Context<Key>) => void)[]
    };

    let events: Partial<Events> = {};

    return {
        contexts: () => val,
        destroyContexts: () => {
            Dispatcher.removeListener("COLORWAYS_CONTEXT_UPDATED", <Key extends ContextKey>({ c, value }: { c: Key, value: Context<Key>; }) => {
                val[c] = value;
                if (events[c]) {
                    events[c].forEach(callback => callback(c, value));
                }
            });
            events = {};
        },
        addContextListener: (context: ContextKey, callback: <Key extends ContextKey>(context: Key, value: Context<Key>) => void) => {
            if (!events[context]) {
                events[context] = [];
            }
            events[context].push(callback);
        }
    };
}
