const password = 'Dogrulecat1'
var paswd=  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{10,21}$/;
if ( password.length >= 10 && paswd) {
    console.log ('success')
} else {
    console.log('fail')
}


console.log(`
_________            _______  _       _________  _________ _______    _______  _        _______  _______  _______ 
\__   __/  |\     /|(  ___  )( (    /|\__   __/  \__   __/(  ___  )  (  ____ \( \      (  ____ \(  ____ \(  ____ )
   ) (     | )   ( || (   ) ||  \  ( |   ) (        ) (   | (   ) |  | (    \/| (      | (    \/| (    \/| (    )|
   | |     | | _ | || (___) ||   \ | |   | |        | |   | |   | |  | (_____ | |      | (__    | (__    | (____)|
   | |     | |( )| ||  ___  || (\ \) |   | |        | |   | |   | |  (_____  )| |      |  __)   |  __)   |  _____)
   | |     | || || || (   ) || | \   |   | |        | |   | |   | |        ) || |      | (      | (      | (      
___) (___  | () () || )   ( || )  \  |   | |        | |   | (___) |  /\____) || (____/\| (____/\| (____/\| )      
\_______/  (_______)|/     \||/    )_)   )_(        )_(   (_______)  \_______)(_______/(_______/(_______/|/       
                                                                                                                  
`
)
