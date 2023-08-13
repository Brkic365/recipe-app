const UID = "Lhet2S5jVTMBajIHCZEfAz8WxQW2"; // Replace with actual UID

const CORS_PROXY_URL = "http://localhost:8080/";

const headers = {
  authid: UID,
  "Access-Control-Allow-Origin": "*", // Allow requests from any origin
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
  "Access-Control-Allow-Headers":
    "Origin, X-Requested-With, Content-Type, Accept, Authorization",
};

async function fetchApi(url: string, config: RequestInit = {}) {
  const response = await fetch(url, { ...config, headers });
  if (!response.ok) {
    throw new Error(`Fetch error: ${response.status} - ${response.statusText}`);
  }
  return response.json();
}

export async function getAllUsers() {
  try {
    const response = await fetchApi(
      CORS_PROXY_URL + "https://getappusers-zazjbx7nka-uc.a.run.app/"
    );
    return response.appUsers;
  } catch (error) {
    throw new Error("Failed to fetch users");
  }
}

export async function getUser(appUserId: string) {
  try {
    const response = await fetchApi(
      CORS_PROXY_URL +
        `https://getappuser-zazjbx7nka-uc.a.run.app/?appUserId=${appUserId}`
    );
    return response.appUser;
  } catch (error) {
    throw new Error(`Failed to fetch user with ID ${appUserId}`);
  }
}

export async function addUser(name: string, email: string, password: string) {
  try {
    const response = await fetchApi(
      CORS_PROXY_URL + "https://addappuser-zazjbx7nka-uc.a.run.app/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      }
    );
    return response.appUserId;
  } catch (error) {
    throw new Error("Failed to add user");
  }
}

export async function deleteUser(appUserId: string) {
  try {
    await fetchApi(
      CORS_PROXY_URL +
        `https://deleteappuser-zazjbx7nka-uc.a.run.app/?appUserId=${appUserId}`
    );
  } catch (error) {
    throw new Error(`Failed to delete user with ID ${appUserId}`);
  }
}

export async function loginUser(email: string, password: string) {
  try {
    const response = await fetchApi(
      CORS_PROXY_URL + "https://login-zazjbx7nka-uc.a.run.app/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      }
    );
    return response.appUser;
  } catch (error) {
    throw new Error("Login failed");
  }
}

export async function getAllRecipes() {
  try {
    const response = await fetchApi(
      CORS_PROXY_URL + "https://getrecipes-zazjbx7nka-uc.a.run.app/"
    );
    return response.recipes;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch recipes");
  }
}

export async function getRecipe(recipeId: string | undefined) {
  try {
    const response = await fetchApi(
      CORS_PROXY_URL +
        `https://getrecipe-zazjbx7nka-uc.a.run.app/?recipeId=${recipeId}`
    );
    return response.recipe;
  } catch (error) {
    throw new Error(`Failed to fetch recipe with ID ${recipeId}`);
  }
}

export async function addRecipe(recipeData: any) {
  try {
    const response = await fetchApi(
      CORS_PROXY_URL + "https://addrecipe-zazjbx7nka-uc.a.run.app/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          recipe: recipeData,
        }),
      }
    );
    return response.recipeId;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to add recipe");
  }
}

export async function editRecipe(
  recipeId: string | undefined,
  recipeData: any
) {
  try {
    await fetchApi(
      CORS_PROXY_URL +
        `https://editrecipe-zazjbx7nka-uc.a.run.app/?recipeId=${recipeId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          recipe: recipeData,
        }),
      }
    );
  } catch (error) {
    throw new Error(`Failed to edit recipe with ID ${recipeId}`);
  }
}

export async function deleteRecipe(recipeId: string | undefined) {
  try {
    await fetchApi(
      CORS_PROXY_URL +
        `https://deleterecipe-zazjbx7nka-uc.a.run.app/?recipeId=${recipeId}`
    );
  } catch (error) {
    throw new Error(`Failed to delete recipe with ID ${recipeId}`);
  }
}
