<?php

namespace App\Entity;

use App\Repository\DuelMatchRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: DuelMatchRepository::class)]
class DuelMatch
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 50)]
    private ?string $format = null;

    #[ORM\Column]
    private ?int $duel_format = null;

    #[ORM\Column(length: 20)]
    private ?string $results = null;

    #[ORM\Column(length: 255)]
    private ?string $your_colors_deck = null;

    #[ORM\Column(length: 255)]
    private ?string $opponent_colors_deck = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getFormat(): ?string
    {
        return $this->format;
    }

    public function setFormat(string $format): static
    {
        $this->format = $format;

        return $this;
    }

    public function getDuelFormat(): ?int
    {
        return $this->duel_format;
    }

    public function setDuelFormat(int $duel_format): static
    {
        $this->duel_format = $duel_format;

        return $this;
    }

    public function getResults(): ?string
    {
        return $this->results;
    }

    public function setResults(string $results): static
    {
        $this->results = $results;

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
