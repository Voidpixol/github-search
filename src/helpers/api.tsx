const baseUrl = "https://api.github.com/search/";

const getData = async (
  query: string,
  page: number = 1
): Promise<any> => {
  const url = `${baseUrl}users?q=${query}&page=${page}&per_page=5`;

  const users: any = await fetch(url)
    .then((res) => res.json())
    .then(async (data) => {
      return {
        total: data.total_count,
        page,
        users: await Promise.all(
          data.items.map((item: any) => getDetails(item.url, item))
        ),
      };
    })
    .catch((err) => err);

  return users;
};

const getDetails = async (url: string, item: any) => {
  return await fetch(url)
    .then((res) => res.json())
    .then((data) => {
      
      return {...item, ...data}
    })
    .catch((err) => err);
};

export { getData };
