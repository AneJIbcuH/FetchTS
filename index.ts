type ObjResp = {
  id: number
  category?: Category
  name: string
  photoUrls: string[]
  tags: any[]
  status: string
}

type Category = {
  id: number
  name: string
}

async function fetchAvailablePets(): Promise<void> {
    try {
        const response = await fetch('https://petstore3.swagger.io/api/v3/pet/findByStatus?status=available');

        if (!response.ok) {
            throw new Error(`Ошибка HTTP: ${response.status}`);
        }

        const pets: ObjResp[] = await response.json();

        console.log(pets);
    } catch (error) {
        console.error('Произошла ошибка:', error);
    }
}

fetchAvailablePets();