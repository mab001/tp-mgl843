exporting
exportToCSV: filename
    | classes writer |
    classes := model allModelClasses.
    
    filename asFileReference writeStreamDo: [ :stream |
        writer := NeoCSVWriter on: stream.
        
        "Écrire l'en-tête"
        writer nextPut: #('ClassName' 'NumberOfMethods' 'NumberOfAttributes' 'LinesOfCode').
        
        "Écrire chaque classe ligne par ligne"
        classes do: [ :class |
            writer nextPut: { 
                class name. 
                class numberOfMethods. 
                class numberOfAttributes. 
                class numberOfLinesOfCode 
            }
        ]
    ]