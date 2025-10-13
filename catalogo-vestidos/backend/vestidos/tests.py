from django.test import TestCase
from .models import Vestido

class VestidoModelTest(TestCase):
    def setUp(self):
        Vestido.objects.create(nombre="Vestido de Fiesta", descripcion="Un hermoso vestido de fiesta.", imagen_url="http://example.com/vestido1.jpg")
        Vestido.objects.create(nombre="Vestido de Novia", descripcion="Un elegante vestido de novia.", imagen_url="http://example.com/vestido2.jpg")

    def test_vestido_creation(self):
        vestido1 = Vestido.objects.get(nombre="Vestido de Fiesta")
        vestido2 = Vestido.objects.get(nombre="Vestido de Novia")
        self.assertEqual(vestido1.descripcion, "Un hermoso vestido de fiesta.")
        self.assertEqual(vestido2.descripcion, "Un elegante vestido de novia.")

    def test_vestido_image_url(self):
        vestido1 = Vestido.objects.get(nombre="Vestido de Fiesta")
        vestido2 = Vestido.objects.get(nombre="Vestido de Novia")
        self.assertEqual(vestido1.imagen_url, "http://example.com/vestido1.jpg")
        self.assertEqual(vestido2.imagen_url, "http://example.com/vestido2.jpg")