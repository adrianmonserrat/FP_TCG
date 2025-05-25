<?php

namespace App\Entity;

use App\Repository\AlbumRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: AlbumRepository::class)]
class Album
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column]
    private ?int $personal_copies = null;

    #[ORM\Column]
    private ?int $personal_copies_foil = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getPersonalCopies(): ?int
    {
        return $this->personal_copies;
    }

    public function setPersonalCopies(int $personal_copies): static
    {
        $this->personal_copies = $personal_copies;

        return $this;
    }

    public function getPersonalCopiesFoil(): ?int
    {
        return $this->personal_copies_foil;
    }

    public function setPersonalCopiesFoil(int $personal_copies_foil): static
    {
        $this->personal_copies_foil = $personal_copies_foil;

        return $this;
    }
}
