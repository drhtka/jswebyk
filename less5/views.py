# -*- coding: utf-8 -*-
from django.shortcuts import render, redirect
from django.template.response import TemplateResponse, HttpResponse

def JstDef5(request):
    return TemplateResponse(request, 'less5/html5.html')

def JsDefDz5(request):
    return TemplateResponse(request, 'less5/htmldz5.html')
