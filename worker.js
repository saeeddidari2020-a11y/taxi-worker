export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // صفحه پنل راننده
    if (url.pathname === "/admin") {
      return new Response(`
        <!DOCTYPE html>
        <html lang="fa" dir="rtl">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <title>پنل راننده</title>
          <style>
            body { font-family: Tahoma; background: #111; color: #fff; text-align: center; padding: 50px; }
            h1 { color: #ffca28; }
            .box { background: #222; padding: 20px; border-radius: 15px; max-width: 400px; margin: 0 auto; border: 1px solid #333; }
            input, button { width: 100%; padding: 12px; margin: 10px 0; border-radius: 8px; border: none; }
            input { background: #333; color: #fff; }
            button { background: #ffca28; font-weight: bold; cursor: pointer; }
          </style>
        </head>
        <body>
          <div class="box">
            <h1>🚕 تست پنل راننده</h1>
            <p>اگر این صفحه را می‌بینید، یعنی کلادفلر درست کار می‌کند!</p>
            <input type="number" placeholder="مبلغ را وارد کنید">
            <button>ساخت لینک</button>
          </div>
        </body>
        </html>
      `, { headers: { "Content-Type": "text/html; charset=utf-8" } });
    }

    // صفحه اصلی
    return new Response("سلام! این Worker با موفقیت کار می‌کند. برای دیدن پنل راننده به /admin بروید.", {
      headers: { "Content-Type": "text/plain; charset=utf-8" }
    });
  }
};
