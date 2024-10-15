export const HomePage = `
<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Authentication</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
          }
          .container {
            text-align: center;
            background: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          }
          h1 {
            color: #333;
          }
          a {
            text-decoration: none;
            background-color: #4285F4;
            color: white;
            padding: 10px 20px;
            border-radius: 5px;
            transition: background-color 0.3s;
          }
          a:hover {
            background-color: #357ae8;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <p>Please authenticate using your Google account.</p>
          <a href="/auth/google">Authenticate with Google</a>
        </div>
      </body>
    </html>
`;

export const ProtectedRoute = (username) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Protected Page</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            margin: 0;
        }
        h1 {
            color: #333;
        }
        a {
            display: inline-block;
            margin-top: 20px;
            padding: 10px 20px;
            background-color: #007bff;
            color: white;
            text-decoration: none;
            border-radius: 5px;
            transition: background-color 0.3s;
        }
        a:hover {
            background-color: #0056b3;
        }
    </style>
</head>
<body>
    <h1>Hello, ${username}</h1>
    <a href="/auth/logout">Logout</a>
</body>
</html>
`;
