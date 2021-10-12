# NestJS-Project
########################################################################
########                      SIDS PROJECT                      ########
########################################################################
########################################################################
########                        BACKEND                         ########
########################################################################

# Installation du projet (Backend & Frontend)
git clone link_project

# Démarrage Backend (nest-api)

cd nest-api
créer un fichier .env

renseigner dans le fichier .env le PORT d'écoute du projet & le lien d'accès à la base de données

PORT = 8000
DATABASE_URL = mongodb+srv://sids:sids@cluster0.qf8xn.mongodb.net/dbProduct?retryWrites=true&w=majority

exécuter les commandes

npm install
nest start

# Routes installées
# User
Lister l'ensemble des utilisateurs avec la méthode GET
http://localhost:8000/user/users

Lister un utilisateur particulier avec la méthode GET
http://localhost:8000/user/user/id_user (remplacer id_user par l'identifiant de l'utilisateur qu'on souhaite afficher)

Ajouter un nouveau utilisateur avec la méthode POST
http://localhost:8000/user/create

Mettre à jour un utilisateur avec la méthode PUT
http://localhost:8000/user/update/id_user (remplacer id_user par l'identifiant de l'utilisateur qu'on souhaite modifier)

Supprimer un utilisateur avec la méthode DELETE
http://localhost:8000/user/delete/id_user (remplacer id_user par l'identifiant de l'utilisateur qu'on souhaite supprimer)

# Category
Lister l'ensemble des catégories avec la méthode GET
http://localhost:8000/category/categories

Lister une catégorie particulière avec la méthode GET
http://localhost:8000/category/category/id_category (remplacer id_category par l'identifiant de la catégorie qu'on souhaite afficher)

Ajouter une nouvelle catégorie avec la méthode POST
http://localhost:8000/category/create

Mettre à jour une catégorie avec la méthode PUT
http://localhost:8000/category/id_category (remplacer id_category par l'identifiant de la catégorie qu'on souhaite modifier)

Supprimer une catégorie avec la méthode DELETE
http://localhost:8000/category/delete/id_category (remplacer id_category par l'identifiant de la catégorie qu'on souhaite supprimer)

# Product
Lister l'ensemble des produits avec la méthode GET
http://localhost:8000/product/products

Lister un produit particulier avec la méthode GET
http://localhost:8000/product/product/id_product (remplacer id_product par l'identifiant du produit qu'on souhaite afficher)

Ajouter un nouveau produit avec la méthode POST
http://localhost:8000/product/create/id_user/ (remplacer id_user par l'id de l'auteur et id_category par l'id de la catégorie du produit qu'on souhaite créer)

Mettre à jour un produit avec la méthode PUT
http://localhost:8000/product/update/id_product (remplacer id_product par l'identifiant du produit qu'on souhaite modifier)

Supprimer un produit avec la méthode DELETE
http://localhost:8000/product/delete/id_product (remplacer id_product par l'identifiant du produit qu'on souhaite supprimer)

#########################################################################
########                        FRONTEND                         ########
#########################################################################

# Une interface utilisateur avec ReactJS est mise en place pour les tests
# Démarrage Frontend (client)

cd client

exécuter les commandes

npm install
npm start

Bonne chance !