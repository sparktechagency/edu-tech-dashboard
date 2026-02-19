import { api } from '../api/baseApi';

export const chatSlice = api.injectEndpoints({
    endpoints: (builder) => ({
        getChatRooms: builder.query({
            query: () => '/chat/rooms', // Adjust endpoint as per actual backend if known
            // For now, we'll use transformResponse to provide demo data if needed,
            // or just mock the whole thing for development.
            transformResponse: (response: any) => response.data || [],
            async onQueryStarted(arg, { queryFulfilled }) {
                // This is a placeholder for actual data fetching
                // In development, if the API is not ready, we can return demo data here
            },
        }),
        getMessages: builder.query({
            query: (chatId) => `/message/${chatId}`,
            transformResponse: (response: any) => response.data || [],
        }),
        sendMessage: builder.mutation({
            query: (formData) => ({
                url: '/message',
                method: 'POST',
                body: formData,
            }),
        }),
    }),
});

export const { useGetChatRoomsQuery, useGetMessagesQuery, useSendMessageMutation } = chatSlice;
