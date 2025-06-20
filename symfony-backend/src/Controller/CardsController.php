<?php

namespace App\Controller;

use App\Entity\Cards;
use App\Repository\CardsRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/cards')]
class CardsController extends AbstractController
{
    #[Route('/', name: 'cards_list', methods: ['GET'])]
    public function index(CardsRepository $cardsRepository): JsonResponse
    {
        $cards = $cardsRepository->findAll();
        $data = [];

        foreach ($cards as $card) {
            $data[] = [
                'id' => $card->getId(),
                'name' => $card->getName(),
                'cost' => $card->getCost(),
                'attack' => $card->getAttack(),
                'life' => $card->getLife(),
                'lore_point' => $card->getLorePoint(),
                'description' => $card->getDescription(),
                'rarity' => $card->getRarity(),
                'language' => $card->getLanguage(),
                'img_card' => $card->getImgCard(),
                'card_number' => $card->getCardNumber(),
            ];
        }

        return $this->json($data);
    }

    #[Route('/{id}', name: 'card_show', methods: ['GET'])]
    public function show(Cards $card): JsonResponse
    {
        return $this->json([
            'id' => $card->getId(),
            'name' => $card->getName(),
            'cost' => $card->getCost(),
            'attack' => $card->getAttack(),
            'life' => $card->getLife(),
            'lore_point' => $card->getLorePoint(),
            'description' => $card->getDescription(),
            'rarity' => $card->getRarity(),
            'language' => $card->getLanguage(),
            'img_card' => $card->getImgCard(),
            'card_number' => $card->getCardNumber(),
        ]);
    }

    #[Route('/', name: 'card_create', methods: ['POST'])]
    public function create(Request $request, EntityManagerInterface $em): JsonResponse
    {
        $data = json_decode($request->getContent(), true);

        $card = new Cards();
        $card->setName($data['name'] ?? '');
        $card->setCost($data['cost'] ?? 0);
        $card->setAttack($data['attack'] ?? 0);
        $card->setLife($data['life'] ?? 0);
        $card->setLorePoint($data['lore_point'] ?? 0);
        $card->setDescription($data['description'] ?? '');
        $card->setRarity($data['rarity'] ?? '');
        $card->setLanguage($data['language'] ?? '');
        $card->setImgCard($data['img_card'] ?? '');
        $card->setCardNumber($data['card_number'] ?? '');

        $em->persist($card);
        $em->flush();

        return $this->json(['message' => 'Card created', 'id' => $card->getId()], Response::HTTP_CREATED);
    }

    #[Route('/{id}', name: 'card_update', methods: ['PUT'])]
    public function update(Request $request, Cards $card, EntityManagerInterface $em): JsonResponse
    {
        $data = json_decode($request->getContent(), true);

        $card->setName($data['name'] ?? $card->getName());
        $card->setCost($data['cost'] ?? $card->getCost());
        $card->setAttack($data['attack'] ?? $card->getAttack());
        $card->setLife($data['life'] ?? $card->getLife());
        $card->setLorePoint($data['lore_point'] ?? $card->getLorePoint());
        $card->setDescription($data['description'] ?? $card->getDescription());
        $card->setRarity($data['rarity'] ?? $card->getRarity());
        $card->setLanguage($data['language'] ?? $card->getLanguage());
        $card->setImgCard($data['img_card'] ?? $card->getImgCard());
        $card->setCardNumber($data['card_number'] ?? $card->getCardNumber());

        $em->flush();

        return $this->json(['message' => 'Card updated']);
    }

    #[Route('/{id}', name: 'card_delete', methods: ['DELETE'])]
    public function delete(Cards $card, EntityManagerInterface $em): JsonResponse
    {
        $em->remove($card);
        $em->flush();

        return $this->json(['message' => 'Card deleted']);
    }
}