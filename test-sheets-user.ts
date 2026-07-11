import { google } from "googleapis";
const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: "medspeak-akademie@encoded-net-502100-s5.iam.gserviceaccount.com",
    private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDR3WP20h3kuR9e\n7OBVc3lOkBQVH/sNjg3PJiItglEUXDFEmFmOxQ2FYSSmyyJxmLwZbkRA3BakTd1p\nYEEFUduFkFg4kuTmq1YSEh+uurbsJUWsoGmTs8naAKsawRxTs7QZeq2GyqRbjnJW\nQjof4mdlh3iHTn0pxrUpV4+50GtQEn12uDD2wDYVaX4XYUiZR/EvNbaJm23VthWb\nvA1oB8cLzmtR9VX8xOzQGK6T0zzg+sS0dIC20wZQoULE/RO0f3W0Xrknf5GNG13l\nsTOc6rdeLAn5+CqAEmSoCwg/IuhtZZj9LYED7SyiaKIxcjc84e+UbmNhw29iOnuP\nAmpYoKlFAgMBAAECggEAFy+O8j9vhwv+z8V62WX7EndviI/ydCJsGyU65G0/2PCA\njvQH/PJ/VmuPmY/au9MkgOjCSKooJDnoCtLUDCrphl2WqZVtDaEDTtbKwkqll/xc\nMMC+OU/FLr0hKkEIiKTTcncvwbMUqnrX3fjOJCSmyLxJUCWXRWzLKgie++fvWzak\nV6evBRHs1TTnwzL0Qm5Zs5WyVeUAT+76NyHr1OSFhiGV0zwxUW4OPy2xHCxRAGqN\nN7Nlom6C2vRQKEiHAE4mgeQFi+wBzFg7nziWodtX+HvcP8PJliJo+bQYToaM1RZA\n3Yc5YpLek1rW7dS5BPVPrykSktEWfN/M1oHh/AvehwKBgQD8c6eRu5nls+e5EFb5\nYRnmj09KKmLP/XqLJUKBp60BS9aNRiFXwyjZySD5DEEQGDukB6HGf9dL6Y46PjCJ\n9pKAjFa0nyqPWGX587jsAPRKPx/SuOzGas0adLN9bS/jtwUFr++971lOuC895GQ/\nEEnI2gtQq0LyP5yp002lCroZSwKBgQDU0IEDwj/c1KMzUacirJH0bEPowOZVk/LX\nn/YFNUjHY3in1UWps1jfanalpDrtGTvzG+1tcZ4BT8k46KRc4VR4jtj1zvkJwoFh\nxbswRphChchSoiZ6u1dRX7rSzVKXr203k5kOWB4Wp4tkPe8pUEZ0Y9erz6uPZfX0\nubfmaxe9rwKBgQD4+yf9d0TlY3Xa896TvczJs/XDc+JYt+qwaWMadMEQUjecxdoE\nsJoNkWxPtGJG+V94+332RAeW+xYnI0bECseauM6a/ZAAKHMK/fEX8ij9QRylu3Tq\njFMVEJwlzBY7RDpTzZ1pejJejREqvaKRAAOFcGdQfFhei5Z7d8dQSzAX2QKBgAM2\n+xvxbUGKvMRjsWCmtrW4hPYZI+GbEIoNUowVl/nbGNGAOUMtAGSvmQc7ieBXBz7O\n5zFGDBr8948yhHkatknz7ncYH070bzvo3sEF7/rhRntpE6e6+MCz74CLtXmxHrc+\nNYuv7RRuh36GKPy4x7euYm2n/3F1GtgNjiee6oblAoGAYEHkAcEHL/EpJuBx4p99\ncwWfxHdN0OSY5vi+eBHoEE2aZRWP4BkRK9+jJvdAu/vIi0LBsSZL8z821JcxGqge\npD5AF0YWC59LmzzK57h+Fu2mBYve7RlMu3vnblCx7hWbIrQ8ekNtwgQ6QGJINmiH\nS1P7+A2Rxtz3PjHOXD2VqEg=\n-----END PRIVATE KEY-----\n"
  },
  scopes: ['https://www.googleapis.com/auth/spreadsheets']
});
const sheets = google.sheets({ version: 'v4', auth });
sheets.spreadsheets.get({ spreadsheetId: "18jGcYxAbgcVQ-rU0P5mK4_nLcJmG0sPaBhjg1e8juG0" })
  .then(res => console.log("OK:", res.data.sheets?.map(s => s.properties?.title)))
  .catch(err => console.error("ERR:", err.message));
