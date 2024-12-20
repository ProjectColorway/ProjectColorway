/**
 * Prompts the user to choose a file from their system
 * @param mimeTypes A comma separated list of mime types to accept, see https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/accept#unique_file_type_specifiers
 * @returns A promise that resolves to the chosen file or null if the user cancels
 */
export function chooseFile(mimeTypes: string) {
    return new Promise<File | null>(resolve => {
        const input = document.createElement("input");
        input.type = "file";
        input.style.display = "none";
        input.accept = mimeTypes;
        input.onchange = async () => {
            resolve(input.files?.[0] ?? null);
        };

        document.body.appendChild(input);
        input.click();
        document.body.removeChild(input);
    });
}

/**
 * Prompts the user to save a file to their system
 * @param file The file to save
 */
export function saveFile(file: File) {
    const a = document.createElement("a");
    a.href = URL.createObjectURL(file);
    a.download = file.name;

    document.body.appendChild(a);
    a.click();
    URL.revokeObjectURL(a.href);
    document.body.removeChild(a);
}