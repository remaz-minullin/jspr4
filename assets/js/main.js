/* 14 var */

/* task1 */
document.addEventListener('keydown', function (ev) {
    if (ev.altKey) {
        if (ev.key !== 'Alt') {
            switch (ev.key) {
                case 'a':
                    console.log('вы нажали alt + a');
                    break;
                case 'b':
                    console.log('вы нажали alt + b');
                    break;
                default:
                    console.log('вы нажали alt + ' + ev.key);
                    ev.preventDefault()
            }
        }
    }
    else {
        switch (ev.key) {
            case 'a':
                console.log('нажата a')
                break
            case 'b':
                console.log("нажат b")
                break
            default:
                console.log("вы нажали " + ev.key)
        }
    }
})

/* task2 */
document.addEventListener('keydown', function (ev) {
    
    const mooifiers = (ev.altKey || ev.ctrlKey || ev.shiftKey || ev.metaKey) && !ev.key;
    if (mooifiers) {
        return;
    }

    if (ev.ctrlKey && ev.shiftKey) {
        switch (ev.key) {
            case 's':
                console.log('сохраить Ctrl + Shift + S ')
                ev.preventDefault()
                break
            case 'n':
                console.log('создать новый файл Ctrl + Shift + N')
                ev.preventDefault()
                break
            default:
                console.log('нажали Ctrl + Shift + ' + ev.key)
                ev.preventDefault()
        }
    }
    else if (ev.shiftKey) {
        if (ev.key !== 'Shift') {
            switch (ev.key) {
                case 'A':
                    console.log('вы нажали Shift + а');
                    break;
                default:
                    console.log('вы нажали Shift + ' + ev.key);
            }
        }
        else if (ev.ctrlKey) {
           if (ev.key !== 'Ctrl') {
            switch (ev.key) {
                case 's':
                    console.log('вы нажали ctrl + S')
                    ev.preventDefault()
                    break
                default:
                    console.log('вы нажали ctrl + ' + ev.key)
                    ev.preventDefault()
            }
           }
        }
        else if (ev.metaKey) {
            switch (ev.key) {
                case 's':
                    console.log('вы нажали Meta + S')
                    ev.preventDefault
                    break
                default:
                    console.log('вы нажали Meta + ' + ev.key)
            }
        }
    }
})

