import React from 'react';

function FileBrowser() {

    let fileReader;


    const handleFileRead = (e) => {
        const content = fileReader.result;
        console.log(content.split('\n'))
    }

    const readData = (e) => {
        fileReader = new FileReader();
        fileReader.onloadend = handleFileRead;
        fileReader.readAsText(e.target.files[0]);
        
    }

    return (
        <div>This is where you can search for files

            <input onChange={readData} type="file" accept='.txt,.rc'/>

        </div>
    )
}

export default FileBrowser;
