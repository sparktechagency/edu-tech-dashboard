import { api } from '../api/baseApi';

export const chatSlice = api.injectEndpoints({
    endpoints: (builder) => ({
        getChatRooms: builder.query({
            query: () => ({
                url: '/chat',
                method: 'GET',
                cache: 'no-cache',
            }),
            providesTags: ['Chat-Rooms'],
        }),
        getMessages: builder.query({
            query: (chatId) => ({
                url: `/message/${chatId}`,
                method: 'GET',
                cache: 'no-cache',
            }),
            providesTags: ['Chat-Messages'],
        }),
        sendMessage: builder.mutation({
            query: (formData) => ({
                url: '/message',
                method: 'POST',
                body: formData,
            }),
            invalidatesTags: ['Chat-Messages'],
        }),
    }),
});

export const { useGetChatRoomsQuery, useGetMessagesQuery, useSendMessageMutation } = chatSlice;
