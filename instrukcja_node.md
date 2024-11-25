Środowiska uruchomieniowe JavaScript to platformy, które umożliwiają wykonywanie kodu JavaScript poza przeglądarką. Oto kilka popularnych środowisk uruchomieniowych JavaScript:

1. **Node.js**:
   - **Opis**: Node.js to środowisko uruchomieniowe JavaScript oparte na silniku V8 Google Chrome. Umożliwia uruchamianie JavaScript na serwerze.
   - **Zastosowania**: Tworzenie serwerów, aplikacji sieciowych, narzędzi CLI, skryptów automatyzujących.
   - **Instalacja**: Można zainstalować Node.js z oficjalnej strony [nodejs.org](https://nodejs.org/).

2. **Deno**:
   - **Opis**: Deno to nowoczesne środowisko uruchomieniowe JavaScript i TypeScript stworzone przez Ryana Dahla, twórcę Node.js. Deno kładzie duży nacisk na bezpieczeństwo i ma wbudowaną obsługę TypeScript.
   - **Zastosowania**: Tworzenie bezpiecznych aplikacji sieciowych, skryptów, narzędzi CLI.
   - **Instalacja**: Można zainstalować Deno z oficjalnej strony [deno.land](https://deno.land/).

3. **Electron**:
   - **Opis**: Electron to framework do tworzenia aplikacji desktopowych przy użyciu JavaScript, HTML i CSS. Umożliwia uruchamianie aplikacji JavaScript na komputerze jako natywne aplikacje.
   - **Zastosowania**: Tworzenie aplikacji desktopowych, takich jak Visual Studio Code, Slack.
   - **Instalacja**: Można zainstalować Electron za pomocą npm (`npm install electron`).

4. **React Native**:
   - **Opis**: React Native to framework do tworzenia natywnych aplikacji mobilnych przy użyciu JavaScript i React.
   - **Zastosowania**: Tworzenie aplikacji mobilnych na iOS i Android.
   - **Instalacja**: Można zainstalować React Native za pomocą npm (`npm install -g react-native-cli`).


6. Rhino
Opis: Interpreter JavaScript napisany w Javie, często używany do uruchamiania skryptów wewnątrz aplikacji Java.

Zastosowanie: Integracja JavaScript z aplikacjami Java.

Przykład użycia:

```js
import org.mozilla.javascript.Context;
import org.mozilla.javascript.Scriptable;

public class RhinoExample {
  public static void main(String[] args) {
    Context cx = Context.enter();
    try {
      Scriptable scope = cx.initStandardObjects();
      Object result = cx.evaluateString(scope, "1 + 2", "MyScript", 1, null);
      System.out.println(Context.toString(result));
    } finally {
      Context.exit();
    }
  }
}
```
Każde z tych środowisk oferuje unikalne możliwości i narzędzia, które można dostosować do różnych potrzeb projektowych. Czy chciałbyś dowiedzieć się więcej o którymś z tych środowisk?