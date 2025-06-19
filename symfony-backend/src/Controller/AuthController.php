<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class AuthController extends AbstractController
{
    // Iniciar sesión
    #[Route("/api/login", methods: ["POST"])]
    public function login(Request $request): JsonResponse
    {
        session_start(); // Asegúrate de iniciar la sesión

        $data = json_decode($request->getContent(), true);
        $nickname = $data['nickname'] ?? '';
        $password = $data['password'] ?? '';
        $activationToken = bin2hex(random_bytes(32));
        $user->setActivationToken($activationToken);

        // TODO: Aquí deberías validar contra la base de datos de usuarios
        // Ejemplo simulado:
        if ($nickname === 'user' && $password === 'password') {
            $_SESSION['user'] = [
                'nickname' => $nickname,
            ];
            return new JsonResponse(['message' => 'Login successful', 'user' => $_SESSION['user']], 200);
        }

        return new JsonResponse(['message' => 'Invalid credentials'], 401);
    }

    // Verificar si el usuario está autenticado
    #[Route("/api/check", methods: ["GET"])]
    public function checkAuth(): JsonResponse
    {
        session_start();
        if (isset($_SESSION['user'])) {
            return new JsonResponse(['message' => 'Usuario autenticado', 'user' => $_SESSION['user']], 200);
        }
        return new JsonResponse(['message' => 'No estás autenticado'], 401);
    }

    // Cerrar sesión
    #[Route("/api/logout", methods: ["POST"])]
    public function logout(): JsonResponse
    {
        session_start();
        session_unset();
        session_destroy();
        return new JsonResponse(['message' => 'Sesión cerrada'], 200);
    }
}