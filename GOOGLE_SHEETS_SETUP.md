# Configuration Google Sheets

Ce guide vous explique comment configurer Google Sheets pour recevoir les données du formulaire.

## Étape 1 : Créer le Google Sheet

1. Allez sur [Google Sheets](https://sheets.google.com)
2. Créez un nouveau document (cliquez sur le bouton `+` ou "Nouveau")
3. Nommez-le "European Tech IPO - User Info" (ou le nom de votre choix)
4. Créez les en-têtes de colonnes suivantes dans la première ligne :
   - Colonne A : `Timestamp`
   - Colonne B : `First Name`
   - Colonne C : `Last Name`
   - Colonne D : `Email`
   - Colonne E : `Organisation Type`

## Étape 2 : Créer le Google Apps Script

1. Dans votre Google Sheet, cliquez sur **Extensions** > **Apps Script**
2. Supprimez le code par défaut dans l'éditeur
3. Copiez-collez le code suivant :

```javascript
// Google Apps Script pour recevoir les données du formulaire
function doPost(e) {
  try {
    // Récupérer la feuille active
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Parser les données JSON
    var data = JSON.parse(e.postData.contents);

    // Préparer les données à insérer
    var timestamp = new Date(data.timestamp);
    var firstName = data.firstName || "";
    var lastName = data.lastName || "";
    var email = data.email || "";
    var organisationType = data.organisationType || "";

    // Ajouter une nouvelle ligne avec les données
    sheet.appendRow([timestamp, firstName, lastName, email, organisationType]);

    // Retourner une réponse de succès
    return ContentService.createTextOutput(
      JSON.stringify({
        status: "success",
        message: "Data saved successfully",
      })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    // En cas d'erreur, logger et retourner une erreur
    Logger.log("Error: " + error.toString());
    return ContentService.createTextOutput(
      JSON.stringify({
        status: "error",
        message: error.toString(),
      })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

// Fonction de test (optionnelle)
function testDoPost() {
  var testData = {
    postData: {
      contents: JSON.stringify({
        timestamp: new Date().toISOString(),
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@example.com",
        organisationType: "Venture Capital",
      }),
    },
  };

  var result = doPost(testData);
  Logger.log(result.getContent());
}
```

4. Cliquez sur **Enregistrer** (icône disquette) ou `Ctrl+S` / `Cmd+S`
5. Donnez un nom au projet, par exemple "IPO Form Webhook"

## Étape 3 : Déployer le script comme Web App

1. Cliquez sur le bouton **Déployer** (en haut à droite) > **Nouveau déploiement**
2. Cliquez sur l'icône d'engrenage ⚙️ à côté de "Sélectionner un type"
3. Sélectionnez **Application Web**
4. Configurez les paramètres :
   - **Description** : "IPO Form Webhook" (ou toute description)
   - **Exécuter en tant que** : **Moi** (votre compte)
   - **Qui peut accéder** : **Tout le monde** ⚠️ Important !
5. Cliquez sur **Déployer**
6. Vous devrez peut-être autoriser l'application :
   - Cliquez sur **Autoriser l'accès**
   - Sélectionnez votre compte Google
   - Cliquez sur **Paramètres avancés** si un avertissement apparaît
   - Cliquez sur **Accéder à [nom du projet] (non sécurisé)**
   - Cliquez sur **Autoriser**

## Étape 4 : Copier l'URL du déploiement

1. Après le déploiement, une fenêtre s'affiche avec l'**URL de l'application Web**
2. Copiez cette URL complète (elle ressemble à quelque chose comme :)
   ```
   https://script.google.com/macros/s/AKfycbx.../exec
   ```
3. **IMPORTANT** : Gardez cette URL en sécurité !

## Étape 5 : Configurer l'application Next.js

1. Ouvrez le fichier `.env.local` à la racine de votre projet
2. Remplacez `YOUR_GOOGLE_APPS_SCRIPT_URL_HERE` par l'URL que vous venez de copier :
   ```
   NEXT_PUBLIC_GOOGLE_SHEETS_URL=https://script.google.com/macros/s/AKfycbx.../exec
   ```
3. Enregistrez le fichier
4. **Redémarrez votre serveur de développement** pour que les changements prennent effet :
   ```bash
   npm run dev
   ```

## Étape 6 : Tester

1. Ouvrez votre application sur `http://localhost:3000/ipo`
2. Remplissez le formulaire avec des données de test
3. Cliquez sur "Access"
4. Vérifiez que les données apparaissent dans votre Google Sheet
5. Rafraîchissez la page - le formulaire ne devrait plus apparaître !

## Dépannage

### Le formulaire ne s'envoie pas

- Vérifiez que l'URL dans `.env.local` est correcte (elle doit se terminer par `/exec`)
- Vérifiez que vous avez bien redémarré le serveur après avoir modifié `.env.local`
- Ouvrez la console du navigateur (F12) pour voir s'il y a des erreurs

### Les données n'apparaissent pas dans Google Sheets

- Vérifiez que le script Apps Script est bien déployé
- Vérifiez que "Qui peut accéder" est bien défini sur "Tout le monde"
- Allez dans **Extensions** > **Apps Script** > **Exécutions** pour voir les logs d'erreur

### Pour tester manuellement le script

1. Dans l'éditeur Apps Script, sélectionnez la fonction `testDoPost` dans la liste déroulante
2. Cliquez sur **Exécuter**
3. Vérifiez les logs avec **Affichage** > **Journaux**

## Notes importantes

- Les données sont stockées dans Google Sheets, assurez-vous de respecter le RGPD
- L'URL du script Apps Script est publique mais seulement votre application la connaît
- Vous pouvez limiter l'accès en ajoutant une validation du domaine dans le script si nécessaire
- Le localStorage empêche les visiteurs de remplir le formulaire plusieurs fois depuis le même navigateur

## Pour mettre à jour le script plus tard

Si vous devez modifier le script Apps Script :

1. Allez dans **Extensions** > **Apps Script**
2. Modifiez le code
3. Cliquez sur **Déployer** > **Gérer les déploiements**
4. Cliquez sur l'icône crayon ✏️ à côté de votre déploiement
5. Changez la **Version** en "Nouvelle version"
6. Cliquez sur **Déployer**

L'URL restera la même, vous n'aurez pas besoin de modifier `.env.local`.
