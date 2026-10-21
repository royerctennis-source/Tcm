// Renseigne ici les deux valeurs de ton projet Supabase
// (Supabase → Project Settings → API). La clé "anon" est faite pour être publique :
// la sécurité vient de la connexion obligatoire et des règles définies dans supabase.sql.
window.TCM_CONFIG = {
  supabaseUrl: "https://mtrzxiwhwuxxwfvjvjqm.supabase.co",
  supabaseAnonKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im10cnp4aXdod3V4eHdmdmp2anFtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTI1NjM0OTcsImV4cCI6MjEwODEzOTQ5N30.VN2rPCM7diqBIiqng-f7v0A3b4vHaURjbfgOJFyt9V0

Appli d'animations du club : rotations de matchs, défis, chrono et stats.
Données enregistrées dans Supabase (synchronisées entre téléphones), site hébergé sur Vercel depuis GitHub.

## Fichiers

- `index.html` : l'appli
- `config.js` : adresse et clé de ton projet Supabase (à remplir)
- `supabase.sql` : création de la table et des règles d'accès
- `manifest.webmanifest`, `sw.js`, `icon-*.png` : installation sur téléphone et mode hors ligne
- `vercel.json` : réglage Vercel

## 1. Supabase

1. Crée un projet sur supabase.com.
2. SQL Editor → New query → colle `supabase.sql` → Run.
3. Authentication → Users → Add user : ton e-mail et un mot de passe, coche « Auto confirm ».
4. Authentication → Sign In / Providers : désactive « Allow new users to sign up »
   (seuls les comptes que tu crées pourront se connecter).
5. Project Settings → API : copie l'URL du projet et la clé publique
   (« anon public », ou « publishable » sur les nouveaux projets) dans `config.js`.

## 2. GitHub

1. Nouveau dépôt `tcm-animation`.
2. Add file → Upload files → dépose tous les fichiers du dossier → Commit.

## 3. Vercel

1. Add New → Project → importe le dépôt `tcm-animation`.
2. Framework : Other, pas de commande de build → Deploy.
3. Ton appli est en ligne sur `https://tcm-animation.vercel.app` (ou une adresse proche).
   Chaque modification poussée sur GitHub met le site à jour.

## 4. Sur le téléphone

- Ouvre l'adresse Vercel dans Chrome, connecte-toi, puis menu ⋮ → « Ajouter à l'écran d'accueil ».
- Pour un vrai APK : pwabuilder.com → colle l'adresse Vercel → Package for stores → Android
  → identifiant `fr.tcm.animation` → télécharge. Garde la clé de signature fournie.
"
};
