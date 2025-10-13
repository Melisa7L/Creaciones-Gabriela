from django.db import models

class Vestido(models.Model):
    nombre = models.CharField(max_length=255)
    descripcion = models.TextField()
    imagen_url = models.URLField()

    def __str__(self):
        return self.nombre