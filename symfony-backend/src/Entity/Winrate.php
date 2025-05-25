<?php

namespace App\Entity;

use App\Repository\WinrateRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: WinrateRepository::class)]
class Winrate
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $type_duel = null;

    #[ORM\Column]
    private ?int $win = null;

    #[ORM\Column]
    private ?int $defeat = null;

    #[ORM\Column]
    private ?int $draw = null;

    #[ORM\Column(length: 255)]
    private ?string $your_colors_deck = null;

    #[ORM\Column(length: 255)]
    private ?string $opponent_colors_deck = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTypeDuel(): ?string
    {
        return $this->type_duel;
    }

    public function setTypeDuel(string $type_duel): static
    {
        $this->type_duel = $type_duel;

        return $this;
    }

    public function getWin(): ?int
    {
        return $this->win;
    }

    public function setWin(int $win): static
    {
        $this->win = $win;

        return $this;
    }

    public function getDefeat(): ?int
    {
        return $this->defeat;
    }

    public function setDefeat(int $defeat): static
    {
        $this->defeat = $defeat;

        return $this;
    }

    public function getDraw(): ?int
    {
        return $this->draw;
    }

    public function setDraw(int $draw): static
    {
        $this->draw = $draw;

        return $this;
    }

    public function getYourColorsDeck(): ?string
    {
        return $this->your_colors_deck;
    }

    public function setYourColorsDeck(string $your_colors_deck): static
    {
        $this->your_colors_deck = $your_colors_deck;

        return $this;
    }

    public function getOpponentColorsDeck(): ?string
    {
        return $this->opponent_colors_deck;
    }

    public function setOpponentColorsDeck(string $opponent_colors_deck): static
    {
        $this->opponent_colors_deck = $opponent_colors_deck;

        return $this;
    }
}
