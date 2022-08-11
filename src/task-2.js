const TODOS_URL = "https://jsonplaceholder.typicode.com/todos";

const getTodosByIds = async (ids) => {
    try {
        const requests = await ids.map((id) => fetch(`${TODOS_URL}/${id}`));
        const responses = await Promise.all(requests);
        const dataResults = responses.map(async (data) => await data.json());
        const allTasks = await Promise.all(dataResults);
        console.log(allTasks);
    } catch (error) {
        console.log(error);
    }
};

getTodosByIds([43, 21, 55, 100, 10]);