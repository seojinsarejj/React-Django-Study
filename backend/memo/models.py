from django.db import models

# Create your models here.

class Memo(models.Model):
    title = models.CharField(max_length=200),
    content = models.TextField()
    author = models.CharField(max_length=20),
    created = models.DateTimeField(auto_now_add='true')

    def str(self):
        return self.title

    class Meta:
        ordering = ['created']