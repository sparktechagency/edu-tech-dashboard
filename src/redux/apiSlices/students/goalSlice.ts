import { api } from "../../api/baseApi";


const studentOnBoarding = api.injectEndpoints({
    endpoints: (build) => ({
        submitonboarding: build.mutation({
            query: (data) => {
                return {
                    url: `/onboarding`,
                    method: "POST",
                    body: data,
                }
            },

        }),


    })
});


export const { 

    useSubmitonboardingMutation,

} = studentOnBoarding;