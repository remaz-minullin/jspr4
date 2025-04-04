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
        switch (ev.key) {
            case 's':
                console.log('вы нажали Shift + S')
                ev.preventDefault()
                break
            default:
                console.log('вы нажали Shift + ' + ev.key)
                ev.preventDefault()
        }
    }
    else if (ev.ctrlKey) {
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

})

