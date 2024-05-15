/**
 * Add a stylesheet with an ID
 * @param id The ID of the stylesheet
 * @param css The CSS of the stylesheet
 */
export function setStyle(id: string, css: string): void {
    if(!document.getElementById(id)) {
        document.head.append(Object.assign(document.createElement("style"), {
            id: id,
            textContent: css
        }));
    } else {
        document.getElementById(id).textContent = css;
    }
}

/**
 * Remove a specific style by ID
 * @param id The ID of the stylesheet
 * @description Returns true if style existed, false if not
 */
export function removeStyle(id: string): boolean {
    if(!document.getElementById(id)) {
        return false
    } else {
        if(document.getElementById(id).tagName === "STYLE") {
            document.getElementById(id).remove();
            return true;
        } else {
            return false;
        }
    }
}