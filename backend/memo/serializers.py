from rest_framework import serializers
from .models import Memo

class MemoSerializer(serializers.ModelSerializer):
    class Meta:
        field = (
            'id',
            'title',
            'content',
            'author',
            'created',
        )
        model = Memo