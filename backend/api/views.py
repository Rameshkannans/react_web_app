from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics,status
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import UserSerializer, NoteSerializer, UserDetailsSerializer
from rest_framework.permissions import IsAuthenticated,AllowAny
from .models import Note, UserDetails


# -----------------------------------------------------------------------

class CreateUserView(generics.CreateAPIView):
        queryset = User.objects.all()
        serializer_class = UserSerializer
        permission_classes = [AllowAny]

# -----------------------------------------------------------------------

class UserInfoView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        try:
            user = request.user
            serializer = UserSerializer(user)
            return Response(serializer.data)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    def put(self, request):
        try:
            user = request.user
            serializer = UserSerializer(user, data=request.data, partial=True)  # Allow partial updates
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    
# -----------------------------------------------------------------------

class UserDetailsInfoView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        try:
            user_details = UserDetails.objects.get(author=request.user)
            serializer = UserDetailsSerializer(user_details, context={"request": request})
            return Response(serializer.data)
        except UserDetails.DoesNotExist:
            return Response({"error": "User details not found"}, status=status.HTTP_404_NOT_FOUND)

    def put(self, request):
        try:
            user_details = UserDetails.objects.get(author=request.user)
            serializer = UserDetailsSerializer(user_details, data=request.data, partial=True)  # Allow partial updates
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except UserDetails.DoesNotExist:
            return Response({"error": "User details not found"}, status=status.HTTP_404_NOT_FOUND)
    
# -----------------------------------------------------------------------

class NoteListCreate(generics.ListCreateAPIView):
    serializer_class = NoteSerializer
#     permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny]
    
    def get_queryset(self):
        user = self.request.user
        return Note.objects.filter(author=user)

    def perform_create(self, serializer):
        if serializer.is_valid():
              serializer.save(author = self.request.user)
        else:
             print(serializer.errors)

# -----------------------------------------------------------------------

class NoteUpdate(generics.UpdateAPIView):
    serializer_class = NoteSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Note.objects.filter(author=user)

# -----------------------------------------------------------------------

class NoteDelete(generics.DestroyAPIView):
     queryset = Note.objects.all()
     serializer_class = NoteSerializer
     permission_classes = [IsAuthenticated]

     def get_queryset(self):
        user = self.request.user
        return Note.objects.filter(author=user)
     
# -----------------------------------------------------------------------
