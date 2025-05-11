async function hashValue(value) {
  const encoder = new TextEncoder();
  const data = encoder.encode(value);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

async function check() {
  const usernameHash = "4aba30f1a656b5a3bd77bb5101fe2afb0c6dfea23eefe3acb87c54a343e0d05d";
  const passwordHash = "1733da5982a62ffcdddf6ce86c9c75bb68401a481f64a827a08c7a4531544d4b";

  const getusername = document.getElementById("username").value;
  const getpassword = document.getElementById("password").value;

  const hashedUsername = await hashValue(getusername);
  const hashedPassword = await hashValue(getpassword);

  if (hashedUsername === usernameHash && hashedPassword === passwordHash) {
    window.location.href = "https://revein.neocities.org/coderscult";
  } else {
    alert("Invalid details!");
  }
}
