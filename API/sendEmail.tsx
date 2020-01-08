interface Email {
    name: string
    email: string
    title: string
    body: string
}


/**
 * - send an email to email server
 * @param {Email} email - email object
 * @returns {boolean} - boolean, successful or not
 */
export default async function sendEmail(email: Email){
    const response = await fetch('https://mysterious-mountain-40721.herokuapp.com/email', { 
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            name : email.name, 
            email : email.email,
            title : email.title, 
            body : email.body
        })
    }).catch(error => {
        // failed to fetch
        console.log('fetch error', error)
    });

    if(!response)
        return false;

    const res = await response.json()
    
    if(res === 'Success'){
        console.log('emailed');
        return true;
    }
    else{
        console.log('email error', res)
        return false;
    }
}