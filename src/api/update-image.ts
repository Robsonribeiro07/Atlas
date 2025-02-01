import api from "@/lib/api";


interface UpdateImage {
    UserId: string,
    image: string
}

export async function UpdateImage({UserId, image}: UpdateImage) {
    const response = await api.post('/apiUser/update-image', {
        UserId, image
    })

    return response.data 
}