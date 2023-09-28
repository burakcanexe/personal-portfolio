const baseUrl = 'https://burakcan.dev'

class Request {
    SendMessage = async (response) => {
        const request = await fetch(`${baseUrl}/api/message`,
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify(response)
            })
        const data = await request.json()
        return data
    }
    GetBlog = async (response) => {
        const request = await fetch(`${baseUrl}/api/blog/get`,
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify(response)
            })
        const data = await request.json()
        return data
    }
    GetAllBlogs = async () => {
        const request = await fetch(`${baseUrl}/api/blog/getAll`,
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
            })

        const data = await request.json()
        return data
    }
    GetAllCategories = async () => {
        const request = await fetch(`${baseUrl}/api/category/getAll`,
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
            })

        const data = await request.json()
        return data
    }
    GetAllProjects = async () => {
        const request = await fetch(`${baseUrl}/api/project/get`,
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
            })

        const data = await request.json()
        return data
    }
}

const BurakCanClient = new Request()
export {
    BurakCanClient
}