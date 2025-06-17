<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
class AuthController extends AbstractController
{
    // Iniciar sesión
    /**
     * @Route("/api/login", methods={"POST"})
     */
    public function login(Request $request): JsonResponse
    {
        // Obtener los datos enviados en la solicitud
        $data = json_decode($request->getContent(), true);
        $nickname = $data['nickname'] ?? '';
        $password = $data['password'] ?? '';

        //validacion
        if ($nickname === 'user' && $password === 'password') {
            // Simular un usuario validado y guardar en la sesión
            $_SESSION['user'] = [
                'nickname' => $nickname,
            ];
            
            return new JsonResponse(['message' => 'Login successful'], 200);
        }

        return new JsonResponse(['message' => 'Invalid credentials'], 401);
    }

    // Verificar si el usuario está autenticado
    /**
     * @Route("/api/check", methods={"GET"})
     */
    public function checkAuth(): JsonResponse
    {
        // Comprobar si hay una sesión iniciada
        if (isset($_SESSION['user'])) {
            return new JsonResponse(['message' => 'Usuario autenticado', 'user' => $_SESSION['user']], 200);
        }

        return new JsonResponse(['message' => 'No estás autenticado'], 401);
    }

    // Cerrar sesión
    /**
     * @Route("/api/logout", methods={"POST"})
     */
    public function logout(): JsonResponse
    {
        // Eliminar los datos de la sesión
        session_unset();
        session_destroy();
        
        return new JsonResponse(['message' => 'Sesión cerrada'], 200);
    }
}