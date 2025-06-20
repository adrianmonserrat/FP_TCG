<?php

namespace App\Controller;

use App\Entity\User;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

#[Route('/users')] // Base route for the UserController
class UserController extends AbstractController
{
    #[Route('/', name: 'get_current_user', methods: ['GET'])]
    public function index(UserRepository $userRepository): JsonResponse
    {
        $users = $userRepository->findAll();
        $data = [];

        foreach ($users as $user) {
            $data[] = [
                'id' => $user->getId(),
                'name' => $user->getName(),
                'nickname' => $user->getNickname(),
                'email' => $user->getEmail(),
                'role' => $user->getRole(),
            ];
        }

        return $this->json($data);
    }

    #[Route('/{id}', name: 'user_show', methods: ['GET'])]
    public function show(User $user): JsonResponse
    {
        return $this->json([
            'id' => $user->getId(),
            'name' => $user->getName(),
            'nickname' => $user->getNickname(),
            'email' => $user->getEmail(),
            'role' => $user->getRole(),
        ]);
    }

    #[Route('/', name: 'user_create', methods: ['POST'])]
    public function create(Request $request, EntityManagerInterface $em): JsonResponse
    {
        $data = json_decode($request->getContent(), true);

        $user = new User();
        $user->setName($data['name'] ?? '');
        $user->setNickname($data['nickname'] ?? '');
        $user->setEmail($data['email'] ?? '');
        $user->setPassword($data['password'] ?? '');
        $user->setRole($data['role'] ?? 'ROLE_USER'); // Default role is 'USER'

        $em->persist($user);
        $em->flush();

        return $this->json(['message' => 'User created', 'id' => $user->getId()], Response::HTTP_CREATED);
    }

    #[Route('/{id}', name: 'user_update', methods: ['PUT'])]
    public function update(Request $request, User $user, EntityManagerInterface $em): JsonResponse
    {
        $data = json_decode($request->getContent(), true);

        $user->setName($data['name'] ?? $user->getName());
        $user->setNickname($data['nickname'] ?? $user->getNickname());
        $user->setEmail($data['email'] ?? $user->getEmail());
        $user->setPassword($data['password'] ?? $user->getPassword());
        $user->setRole($data['role'] ?? $user->getRole());

        $em->flush();

        return $this->json(['message' => 'User updated']);
    }

    #[Route('/{id}', name: 'user_delete', methods: ['DELETE'])]
    public function delete(User $user, EntityManagerInterface $em): JsonResponse
    {
        $em->remove($user);
        $em->flush();

        return $this->json(['message' => 'User deleted']);
    }

    #[Route('/login', name: 'user_login', methods: ['POST'])]
    public function login(
        Request $request,
        UserRepository $userRepository,
        UserPasswordHasherInterface $passwordHasher
    ): JsonResponse {
        $data = json_decode($request->getContent(), true);

        $nickname = $data['nickname'] ?? '';
        $password = $data['password'] ?? '';

        // Buscar usuario por nickname
        $user = $userRepository->findOneBy(['nickname' => $nickname]);
        if (!$user) {
            return $this->json(['message' => 'Usuario no encontrado'], 401);
        }

        // Verificar contraseña
        if (!$passwordHasher->isPasswordValid($user, $password)) {
            return $this->json(['message' => 'Contraseña incorrecta'], 401);
        }

        // Puedes guardar el usuario en sesión si quieres autenticación por sesión:
        // $session = $request->getSession();
        // $session->set('user_id', $user->getId());

        // O simplemente devolver los datos del usuario:
        return $this->json([
            'id' => $user->getId(),
            'name' => $user->getName(),
            'nickname' => $user->getNickname(),
            'email' => $user->getEmail(),
            'role' => $user->getRole(),
            // Puedes añadir un token aquí si implementas JWT
        ]);
    }

}
