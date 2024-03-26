async function tempo (request, response) {
    const dynamicDate = new Date();

    const subscribersResponse = await fetch("https://api.convertkit.com/v3/subscribers?api_secret=J2BF-fvV6e6U3luIDKktpM0Bw_wHC_jDg_bUekFLW00");
    const subscribersResponseJson = await subscribersResponse.json();
    const inscritos = subscribersResponseJson.total_subscribers;

        response.json ({
        date: dynamicDate.toGMTString(),
        inscritos: inscritos
    });
}

export default tempo;