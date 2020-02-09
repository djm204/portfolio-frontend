export default function () {
    const contactInfoData = [
        {
            type: 'facebook',
            iconClass: 'facebook',
            contactProfileUrl: 'facebook.com'
        },
        {
            type: 'email',
            iconClass: 'mail',
            contactProfileUrl: 'mailto:me@davidmendez.dev'
        }
    ];
    return Promise.resolve({
        json: () =>
            Promise.resolve(contactInfoData)

    });
}